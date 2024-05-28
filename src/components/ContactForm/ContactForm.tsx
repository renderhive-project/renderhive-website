import { Fragment, useState, useRef, useEffect } from 'react'
import { Dialog, Switch, Transition  } from '@headlessui/react'

// contexts
import { useContactForm } from '../../contexts/ContactFormContext/ContactFormContext';

// components
import { useForm } from "react-hook-form";
import HCaptcha from '@hcaptcha/react-hcaptcha';

// helper function
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

// Status enumeration
enum Status {
    Idle = 'idle',
    Sending = 'sending',
    Success = 'success',
    Error = 'error',
  }

const fetchWithTimeout = (url: string, options: RequestInit) => {
    return new Promise((resolve, reject) => {
        fetch(url, options).then(resolve, reject);

        setTimeout(() => reject(new Error('Request timed out')), 10000);
    });
};

const ContactForm = () => {
    const captchaRef = useRef<HCaptcha>(null);
    const { showContactForm, setShowContactForm } = useContactForm();
    const { register, handleSubmit, setValue } = useForm();
    const [isPrivacyPolicyAccepted, setIsPrivacyPolicyAccepted] = useState(false)
    const [status, setStatus] = useState<Status>(Status.Idle);
    const [error, setError] = useState("");

    // hCaptcha set token
    const onHCaptchaChange = (token: string) => {
        setValue("h-captcha-response", token);
    };
    useEffect(() => {
        if (!showContactForm && captchaRef.current) {
            captchaRef.current.resetCaptcha();
            captchaRef.current.removeCaptcha();
            console.log("Captcha removed");
        }
    }, [showContactForm]);

    // form submission
    const onSubmit = async (data: object) => {
        const formData = new FormData();

        // update status
        setError("");
        setStatus(Status.Sending);

        // check if hCaptcha was filled out
        const form = document.getElementById('contactForm');
        if (!form) {
            setError("Form not found. Please try again later.");
            setStatus(Status.Idle);
            return;
        }
        const hCaptchaElement = form.querySelector('textarea[name=h-captcha-response]') as HTMLTextAreaElement;;
        if (!hCaptchaElement) {
            setError("Could not find hCaptcha element");
            setStatus(Status.Idle);
            return
        } 
        const hCaptcha = hCaptchaElement.value;
        if (!hCaptcha) {
            setError("Please fill out the captcha field");
            setStatus(Status.Idle);
            return
        }

        // only continue if privacy policy is accepted
        if (!isPrivacyPolicyAccepted) {
            setError('Please read and accept our privacy policy before submitting the form.');
            setStatus(Status.Idle);
            return;
        }
        
        // prepare form data for Web3Forms
        Object.entries(data).forEach(([key, value]) => formData.append(key, value));
        formData.append("access_key", "59a7fc80-aeb7-42f5-93a1-2890c9030652");
        formData.append("from_name", "Renderhive Contact Form");

        // reset captcha
        if (captchaRef.current) {
            captchaRef.current.resetCaptcha();
            captchaRef.current.removeCaptcha();
            console.log("Captcha removed");
        }

        try {
            const response = await fetchWithTimeout("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            }) as Response;

            const data = await response.json();

            if (data.success) {
                setStatus(Status.Success);
                // eventTarget.reset();
            } else {
                setStatus(Status.Error);
                console.log("Error", data);
                setError(data.message);
            }

        } catch (error) {
            setStatus(Status.Error);
            console.error('Fetch failed:', error);
            setError("Sending failed. Please try again later.");
        }

  };

  switch (status) {
    case Status.Success:
      return (
        <div className="isolate py-8 px-4 sm:p-8">
            <svg viewBox="0 0 24 24" className="text-green w-20 h-20 mx-auto my-6">
                <path fill="currentColor"
                    d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
                </path>
            </svg>
            <div className="text-center text-main">
                <h3 className="md:text-2xl text-base font-semibold text-center text-white ">Successfully Submitted.</h3>
                <p className="text-main my-2">
                    Thank you for reaching out. We will respond as soon as possible.
                </p>
                <div className="py-10 text-center">
                    <a onClick={() => setShowContactForm(false)} className="px-12 text-white hover:text-secondary font-semibold py-3 hover:cursor-pointer">
                        Back to Website <span className="ml-1" aria-hidden="true">→</span>
                    </a>
                </div>
            </div>
        </div>
      )

      case Status.Error:
        return (
          <div className="isolate py-8 px-4 sm:p-8">
            <svg viewBox="0 0 24 24" className="text-red w-20 h-20 mx-auto my-6">
                <path fill="currentColor" fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clip-rule="evenodd" />
            </svg>
            <div className="text-center text-main">
                <h3 className="md:text-2xl text-base font-semibold text-center text-white ">Something Went Wrong.</h3>
                <p className="text-main my-2">
                    {error}
                </p>
                <div className="py-10 text-center">
                <a onClick={() => setShowContactForm(false)} className="px-12 text-white hover:text-secondary font-semibold py-3 hover:cursor-pointer">
                        Back to Website <span className="ml-1" aria-hidden="true">→</span>
                </a>
                </div>
            </div>
          </div>
        )

        case Status.Sending:
            return (
                <div className="isolate py-8 px-4 sm:p-8">
                    <svg
                        className="text-secondary animate-spin h-16 w-16 mx-auto my-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        ></circle>
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                    </svg>
                    <div className="text-center text-main">
                        <h3 className="md:text-2xl text-base font-semibold text-center text-white ">Sending Email ...</h3>
                        <p className="text-main my-2">
                            Please wait, while your Mail is being delivered to us.
                        </p>
                    </div>
                </div>
            )
    
      default:
        return (
            <div className="isolate py-8 px-4 sm:p-8">
        
                <form id="contactForm" onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-xl">

                    {/* Spam protection */}
                    <input type="checkbox" name="botcheck" className="hidden" style={{"display": "none"}} />
                    <input type="hidden" className="h-captcha" {...register("h-captcha-response")} />

                    {/* Form fields */}
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div>
                        <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-white">
                            First name
                        </label>
                        <div className="mt-2.5">
                            <input
                            type="text"
                            id="first-name"
                            autoComplete="given-name"
                            className="block w-full rounded-md bg-primary-dark border-0 px-3.5 py-2 text-main shadow-sm ring-1 ring-inset ring-primary-navy placeholder:text-main focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                            required
                            {...register("first-name")}
                            />
                        </div>
                        </div>
                        <div>
                        <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-white">
                            Last name
                        </label>
                        <div className="mt-2.5">
                            <input
                            type="text"
                            id="last-name"
                            autoComplete="family-name"
                            className="block w-full rounded-md bg-primary-dark border-0 px-3.5 py-2 text-main shadow-sm ring-1 ring-inset ring-primary-navy placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                            required
                            {...register("last-name")}
                            />
                        </div>
                        </div>
                        {/* <div className="sm:col-span-2">
                        <label htmlFor="company" className="block text-sm font-semibold leading-6 text-white">
                            Company
                        </label>
                        <div className="mt-2.5">
                            <input
                            type="text"
                            name="company"
                            id="company"
                            autoComplete="organization"
                            className="block w-full rounded-md bg-primary-dark border-0 px-3.5 py-2 text-main shadow-sm ring-1 ring-inset ring-primary-navy placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                            />
                        </div>
                        </div> */}
                        <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">
                            Email
                        </label>
                        <div className="mt-2.5">
                            <input
                            type="email"
                            id="email"
                            autoComplete="email"
                            className="block w-full rounded-md bg-primary-dark border-0 px-3.5 py-2 text-main shadow-sm ring-1 ring-inset ring-primary-navy placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                            required
                            {...register("email")}
                            />
                        </div>
                        </div>
                        <div className="sm:col-span-2">
                        <label htmlFor="company" className="block text-sm font-semibold leading-6 text-white">
                            Subject
                        </label>
                        <div className="mt-2.5">
                            <input
                            type="text"
                            id="subject"
                            autoComplete="subject"
                            className="block w-full rounded-md bg-primary-dark border-0 px-3.5 py-2 text-main shadow-sm ring-1 ring-inset ring-primary-navy placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                            {...register("subject")}
                            />
                        </div>
                        </div>
                        <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-sm font-semibold leading-6 text-white">
                            Message
                        </label>
                        <div className="mt-2.5">
                            <textarea
                            id="message"
                            rows={4}
                            className="block w-full rounded-md bg-primary-dark border-0 px-3.5 py-2 text-main shadow-sm ring-1 ring-inset ring-primary-navy placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                            defaultValue={''}
                            required
                            {...register("message")}
                            />
                        </div>
                        </div>
                        <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
                        <div className="flex h-6 items-center">
                            <Switch
                                checked={isPrivacyPolicyAccepted}
                                onChange={setIsPrivacyPolicyAccepted}
                                className={classNames(
                                    isPrivacyPolicyAccepted ? 'bg-secondary ring-secondary' : 'bg-primary-dark ring-main',
                                    'flex bg-primary-mid-dark w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                                )}
                            >
                            <span className="sr-only">Agree to policies</span>
                            <span
                                aria-hidden="true"
                                className={classNames(
                                isPrivacyPolicyAccepted ? 'translate-x-3.5 bg-white' : 'translate-x-0 bg-main',
                                'h-4 w-4 transform rounded-full shadow-sm ring-1 ring-main/5 transition duration-200 ease-in-out'
                                )}
                            />
                            </Switch>
                        </div>
                        <Switch.Label className="text-sm leading-6 text-main">
                            By selecting this, you agree to our{' '}
                            <a href="about/#section-privacy-policy" target="_blank" className="font-semibold text-white hover:text-secondary" onClick={(event) => event.stopPropagation()}>
                            Privacy&nbsp;Policy
                            </a>
                            .
                        </Switch.Label>
                        </Switch.Group>
                    </div> 

                    {/* // display error message */}
                    {error && (
                        <div className="mt-4 p-4 mb-4 block w-full rounded-md bg-primary-dark border-0 text-sm text-red rounded-lg bg-primary-dark ring-1 ring-inset ring-red" role="alert">
                            <span className="font-bold">Error</span> 
                            <p className="pt-2">{error}</p>
                        </div>
                    )}

                    {/* // hCaptcha */}
                    <div className="flex w-full my-4 items-center justify-center">
                        <HCaptcha
                            sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                            reCaptchaCompat={false}
                            onVerify={onHCaptchaChange} 
                            theme="dark"
                            size="normal"
                            // onError={}
                            ref={captchaRef}
                        /> 
                    </div>
                
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 mt-10">
                        <button
                            type="submit"
                            className="relative w-full rounded-md bg-secondary hover:bg-secondary-mid text-primary-dark px-3.5 py-2.5 text-center text-sm font-semibold justify-center"
                        >
                            Submit
                        </button>

                        <button
                            type="button"
                            onClick={() => setShowContactForm(false)}
                            className="w-full rounded-md bg-primary-light hover:bg-primary-navy text-main hover:text-white px-3.5 py-2.5 text-center text-sm font-semibold justify-center"
                        >
                            Cancel
                        </button>
                        
                    </div>
                </form> 
            </div>
        );
    }
}

const ContactFormModal = () => {
    const { showContactForm } = useContactForm();
    const cancelButtonRef = useRef(null)
  
    return (
      <Transition.Root show={showContactForm} as={Fragment}>
      <Dialog static as="div" className="relative z-50" initialFocus={cancelButtonRef} onClose={() => {}}>
  {/* <Dialog static as="div" className="relative z-50" initialFocus={cancelButtonRef} onClose={() => setShowContactForm(false)}> */}
          <Transition.Child
            as="div"
            enter="ease-out duration-0"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="flex fixed inset-0 bg-primary-dark bg-opacity-75 backdrop-filter backdrop-blur-md transition-opacity items-center justify-center" />
          </Transition.Child>
  
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full w-full items-center justify-center p-0 sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative w-full sm:max-w-lg transform overflow-hidden rounded-lg bg-primary-mid-dark px-4 pb-4 pt-5 sm:p-6 m-6 sm:mx-0 sm:my-8 text-left shadow-xl shadow-primary-dark transition-all">
                  <div>
                    <div className="absolute rounded-[100%] -left-[5%] -bottom-[5%] w-[300px] h-[300px] transform-gpu blur-[100px] bg-blue-glow opacity-20" />
                    <ContactForm />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    )
  }

export default ContactFormModal;