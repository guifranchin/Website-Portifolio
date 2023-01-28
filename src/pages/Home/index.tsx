import React from "react";
import { Dialog } from "@headlessui/react";
import { useState } from "react";
import "./style.css";
import { CardInfo } from "../../components/cardInfo";

export const Home = () => {
  return (
    <>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded ">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a
            href="https://github.com/guifranchin"
            className="flex items-center"
          >
            <img src="logo.png" className="h-20 mr-3 " />
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white ">
              <li>
                <li>
                  <button
                    type="button"
                    className="text-blue-600 hover:text-black  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    Default
                  </button>
                </li>
              </li>
              <li>
                <button
                  type="button"
                  className="text-blue-600 hover:text-black border border-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Say Hello!
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main>
        <div className="flex flex-1 justify-center align-middle">
          <div className="flex flex-col align-middle">
            <div className="flex justify-center">
              <img src="Avatar.png" className="scale-50" />
            </div>
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
              Back-end{" "}
              <span className="underline underline-offset-3 decoration-8 decoration-blue-600">
                developer
              </span>
            </h1>
            <p className="text-lg font-normal text-gray-500 lg:text-xl">
              I design and code simple and beautiful things on the back-end, and
              it is my passion.
            </p>
            <p className="flex justify-end text-end font-light text-gray-500 lg:text-left">
              some times frontend....
            </p>
          </div>
        </div>
        <section>
          <div className="bg-blue-600 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:text-center">
                <h2 className="text-lg font-semibold leading-8 tracking-tight text-white">
                  Quem sou eu?
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Hi, I’m Guilherme. Nice to meet you.
                </p>
                <p className="mt-6 text-lg leading-8 text-white">
                  Since starting my career as a developer 2 years ago, I've
                  worked remotely for companies, consulted for startups, and
                  collaborated with skilled individuals to create digital
                  products for both business and consumer use. I am confident in
                  my abilities, constantly seeking to learn and improve my
                  skills, and constantly working to solve complex technical
                  problems.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="halfcolor mb-24">
          <div className="flex flex-col justify-center mb-24 sm:flex-row">
            <CardInfo
              img="teste"
              title="Integration"
              text="Experience in developing integrations for the foreign exchange market, focusing on new implementations and modernization of legacy systems."
              subTitle="Things I like"
              subText="Architecture, Refactoring, Implementation, Optimization"
              tirthTittle="Implements Tools"
              tirthElements={[
                "AWS",
                "Instant Payment System",
                "Sending Money Overseas",
                "Market Practices",
              ]}
            />
            <CardInfo
              img="teste"
              title="API Maintenance"
              text="Experience in developing integrations for the foreign exchange market, focusing on new implementations and modernization of legacy systems."
              subTitle="Things I like"
              subText="Architecture, Refactoring, Implementation, Optimization"
              tirthTittle="Implements Tools"
              tirthElements={[
                "AWS",
                "Instant Payment System",
                "Sending Money Overseas",
                "Market Practices",
              ]}
            />
            <CardInfo
              img="teste"
              title="API Maintenance"
              text="Experience developing and maintaining financial APIs, with an emphasis on good programming practices and architecture to improve code understanding and standardize across microservices."
              subTitle="Things I like"
              subText="Architecture, Refactoring, Implementation, Optimization"
              tirthTittle="Implements Tools"
              tirthElements={[
                "AWS",
                "Instant Payment System",
                "Sending Money Overseas",
                "Market Practices",
              ]}
            />
          </div>
        </section>
        <section className="flex flex-1 justify-center bg-blue-600 pt-5 pb-5">
          <div className="flex align-middle items-center flex-col justify-center max-w-3xl p-6 bg-white border border-gray-200 rounded-lg shadow ">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">
              Would you like to work with me?
            </h5>

            <p className="mb-3 font-normal text-gray-500 ">
              I am always interested in discussing partnership opportunities or
              product design work with you.
            </p>
            <a href="#">
              <button
                type="button"
                className="text-black bg-white focus:ring-8 font-medium rounded-lg text-sm px-5 mr-2 border-spacing-48 border border-blue-900 p-2  "
              >
                Default
              </button>
            </a>
          </div>
        </section>
        <section className="flex flex-grow flex-col  justify-center bg-blue-600 pt-5 items-center">
          <img src="logo-branco.png" className="h-52" />
          <p className="mb-11 font-normal text-white ">
            Partner opportunities or product design work with you are something
            I am always interested in.
          </p>
          <div className="flex flex-grow mb-11">
            <svg
              className="h-8 w-8 text-black"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />{" "}
              <rect x="2" y="9" width="4" height="12" />{" "}
              <circle cx="4" cy="4" r="2" />
            </svg>
            <svg
              className="h-8 w-8 text-black"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
            <svg
              className="h-8 w-8 text-black"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <circle cx="5.5" cy="11.5" r="4.5" />{" "}
              <circle cx="18.5" cy="11.5" r="4.5" />{" "}
              <line x1="5.5" y1="16" x2="18.5" y2="16" />
            </svg>
          </div>
        </section>
      </main>
      <footer className="halfcolor3">
        <div className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 ">
          <span className="text-sm text-gray-500 sm:text-center ">
            © 2023{" "}
            <a
              href="https://www.linkedin.com/in/guilhermefranchin/"
              className="hover:underline"
            >
              Guilherme™
            </a>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500  sm:mt-0">
            <li>
              <a
                href="https://www.linkedin.com/in/guilhermefranchin/"
                className="hover:underline"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};
