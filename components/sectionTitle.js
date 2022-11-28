import React from "react";
import Container from "./container";
import logo_sectiontitle from "../public/img/logo_renderhive_sectiontitle.webp";

export default function SectionTitle(props) {
  return (
    <Container
      className={`flex w-full flex-col mt-4 ${
        props.align === "left" ? "" : "items-center justify-center text-center"
      }`}>
      {props.pretitle && (
        <div className="justify-center text-sm font-bold tracking-wider text-yellow-400 uppercase">
          <img
            className="mx-auto mb-4"
            src="img/logo_renderhive_sectiontitle.webp"
            width="128"
            alt="Renderhive Logo"
            loading="eager"
            placeholder="blur"
            style={{
              maxWidth: "100%",
              height: "auto"
            }}
          />
          {props.pretitle}
        </div>
      )}

      {props.title && (
        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
          {props.title}
        </h2>
      )}

      {props.children && (
        <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          {props.children}
        </p>
      )}
    </Container>
  );
}
