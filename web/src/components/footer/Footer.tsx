import { IFooter, ILink } from "/interfaces/layoutInterfaces";
import Link from "next/link";
import React from "react";
import Container from "../container/Container";
import logo from "assets/img/logo.png";
import Image from "next/image";

interface Props {
  footer: IFooter[];
}
function Footer({ footer }: Props) {
  return (
    <div>
      <Container className="flex flex-col md:flex-row md:justify-center items-center gap-4 py-8 px-2 md:my-8">
        <h3 className="md:text-4xl md:pr-4 capitalize">Let&#39;s be social </h3>
        <div className="flex gap-4">
          <Link href="https://facebook.com">
            <svg
              height="32"
              width="32"
              style={{
                fillRule: "evenodd",
                clipRule: "evenodd",
                strokeLinejoin: "round",
                strokeMiterlimit: 2,
              }}
              version="1.1"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <g>
                <path
                  d="M512,256c0,-141.385 -114.615,-256 -256,-256c-141.385,0 -256,114.615 -256,256c0,127.777 93.616,233.685 216,252.89l0,-178.89l-65,0l0,-74l65,0l0,-56.4c0,-64.16 38.219,-99.6 96.695,-99.6c28.009,0 57.305,5 57.305,5l0,63l-32.281,0c-31.801,0 -41.719,19.733 -41.719,39.978l0,48.022l71,0l-11.35,74l-59.65,0l0,178.89c122.385,-19.205 216,-125.113 216,-252.89Z"
                  style={{ fill: "#1877f2", fillRule: "nonzero" }}
                />
                <path
                  d="M355.65,330l11.35,-74l-71,0l0,-48.022c0,-20.245 9.917,-39.978 41.719,-39.978l32.281,0l0,-63c0,0 -29.297,-5 -57.305,-5c-58.476,0 -96.695,35.44 -96.695,99.6l0,56.4l-65,0l0,74l65,0l0,178.89c13.033,2.045 26.392,3.11 40,3.11c13.608,0 26.966,-1.065 40,-3.11l0,-178.89l59.65,0Z"
                  style={{ fill: "#fff", fillRule: "nonzero" }}
                />
              </g>
            </svg>
          </Link>
          <Link href="https://instgram.com">
            <svg
              height="32"
              style={{ enableBackground: "new 0 0 512 512" } as any}
              version="1.1"
              viewBox="0 0 512 512"
              width="32"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <g id="_x31_73-instagram">
                <g>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="SVGID_1_"
                    x1="74.3496"
                    x2="393.8339"
                    y1="83.7275"
                    y2="386.7129"
                  >
                    <stop offset="0" style={{ stopColor: "#FEC053" }} />
                    <stop offset="0.3273" style={{ stopColor: "#F2203E" }} />
                    <stop offset="0.6485" style={{ stopColor: "#B729A8" }} />
                    <stop offset="1" style={{ stopColor: "#5342D6" }} />
                  </linearGradient>
                  <path
                    d="M256.052,138.088c-65.268,0-117.913,52.646-117.913,117.912    c0,65.267,52.645,117.91,117.913,117.91c65.267,0,117.911-52.644,117.911-117.91C373.963,190.734,321.318,138.088,256.052,138.088    z M256.052,332.659c-42.177,0-76.659-34.38-76.659-76.659c0-42.279,34.378-76.657,76.659-76.657    c42.277,0,76.657,34.378,76.657,76.657C332.709,298.279,298.229,332.659,256.052,332.659L256.052,332.659z M406.288,133.266    c0,15.291-12.315,27.502-27.502,27.502c-15.292,0-27.502-12.314-27.502-27.502c0-15.188,12.313-27.503,27.502-27.503    C393.973,105.763,406.288,118.077,406.288,133.266z M484.382,161.177c-1.743-36.839-10.158-69.474-37.148-96.36    c-26.886-26.887-59.52-35.302-96.36-37.148c-37.971-2.155-151.777-2.155-189.747,0c-36.739,1.743-69.372,10.159-96.361,37.046    c-26.99,26.887-35.302,59.52-37.149,96.36c-2.155,37.969-2.155,151.777,0,189.747c1.745,36.842,10.159,69.473,37.149,96.361    c26.989,26.887,59.521,35.301,96.361,37.148c37.969,2.154,151.776,2.154,189.747,0c36.841-1.744,69.475-10.161,96.36-37.148    c26.887-26.889,35.302-59.52,37.148-96.361C486.538,312.853,486.538,199.147,484.382,161.177z M435.329,391.563    c-8.004,20.112-23.5,35.61-43.716,43.716c-30.273,12.009-102.108,9.236-135.562,9.236c-33.456,0-105.393,2.669-135.563-9.236    c-20.114-8.005-35.611-23.498-43.717-43.716C64.766,361.29,67.538,289.455,67.538,256s-2.669-105.391,9.234-135.562    c8.006-20.114,23.5-35.61,43.717-43.716c30.273-12.007,102.107-9.236,135.563-9.236c33.453,0,105.391-2.668,135.562,9.236    c20.113,8.002,35.609,23.5,43.716,43.716c12.007,30.272,9.237,102.107,9.237,135.562S447.336,361.392,435.329,391.563z"
                    style={{ fill: "url(#SVGID_1_)" }}
                  />
                </g>
              </g>
              <g id="Layer_1" />
            </svg>
          </Link>
          <Link href="https://twitter.com">
            <svg
              height="32px"
              id="Layer_1"
              version="1.0"
              viewBox="0 0 32 32"
              width="32px"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <g>
                <circle
                  clipRule="evenodd"
                  cx="16"
                  cy="16"
                  fill="#55ACEE"
                  fillRule="evenodd"
                  r="16"
                />
                <path
                  d="M26.013,9.896c-0.737,0.323-1.527,0.538-2.359,0.636c0.85-0.498,1.5-1.289,1.807-2.232   c-0.793,0.462-1.672,0.798-2.608,0.979c-0.748-0.784-1.816-1.275-2.996-1.275c-2.269,0-4.105,1.807-4.105,4.039   c0,0.315,0.036,0.625,0.104,0.923c-3.412-0.172-6.436-1.78-8.461-4.222c-0.354,0.597-0.559,1.29-0.559,2.031   c0,1.4,0.728,2.636,1.828,3.363c-0.672-0.023-1.306-0.204-1.858-0.507c-0.001,0.017-0.001,0.033-0.001,0.051   c0,1.958,1.415,3.591,3.293,3.963c-0.343,0.09-0.706,0.141-1.082,0.141c-0.264,0-0.52-0.024-0.771-0.071   c0.521,1.603,2.038,2.771,3.834,2.806c-1.402,1.082-3.174,1.73-5.099,1.73c-0.33,0-0.659-0.019-0.979-0.058   c1.816,1.146,3.976,1.814,6.295,1.814c7.552,0,11.682-6.156,11.682-11.495c0-0.173-0.006-0.351-0.014-0.521   C24.766,11.417,25.462,10.706,26.013,9.896z"
                  fill="#FFFFFF"
                />
              </g>
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
            </svg>
          </Link>
          <Link href="https://www.pinterest.co.uk">
            <svg
              height="32"
              style={{
                fillRule: "evenodd",
                clipRule: "evenodd",
                strokeLinejoin: "round",
                strokeMiterlimit: 2,
              }}
              version="1.1"
              viewBox="0 0 512 512"
              width="32"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <g>
                <path
                  d="M511.999,256.002c0,141.373 -114.606,255.979 -255.98,255.979c-141.373,0 -255.979,-114.606 -255.979,-255.979c0,-141.374 114.606,-255.98 255.979,-255.98c141.374,0 255.98,114.606 255.98,255.98Z"
                  style={{ fill: "#fff", fillRule: "nonzero" }}
                />
                <path
                  d="M255.998,0.001c-141.384,0 -255.998,114.617 -255.998,255.998c0,108.456 67.475,201.171 162.707,238.471c-2.24,-20.255 -4.261,-51.405 0.889,-73.518c4.65,-19.978 30.018,-127.248 30.018,-127.248c0,0 -7.659,-15.334 -7.659,-38.008c0,-35.596 20.632,-62.171 46.323,-62.171c21.839,0 32.391,16.399 32.391,36.061c0,21.966 -13.984,54.803 -21.203,85.235c-6.03,25.482 12.779,46.261 37.909,46.261c45.503,0 80.477,-47.976 80.477,-117.229c0,-61.293 -44.045,-104.149 -106.932,-104.149c-72.841,0 -115.597,54.634 -115.597,111.095c0,22.004 8.475,45.596 19.052,58.421c2.09,2.535 2.398,4.758 1.776,7.343c-1.945,8.087 -6.262,25.474 -7.111,29.032c-1.117,4.686 -3.711,5.681 -8.561,3.424c-31.974,-14.884 -51.963,-61.627 -51.963,-99.174c0,-80.755 58.672,-154.915 169.148,-154.915c88.806,0 157.821,63.279 157.821,147.85c0,88.229 -55.629,159.232 -132.842,159.232c-25.94,0 -50.328,-13.476 -58.674,-29.394c0,0 -12.838,48.878 -15.95,60.856c-5.782,22.237 -21.382,50.109 -31.818,67.11c23.955,7.417 49.409,11.416 75.797,11.416c141.389,0 256.003,-114.612 256.003,-256.001c0,-141.381 -114.614,-255.998 -256.003,-255.998Z"
                  style={{ fill: "#e71d27", fillRule: "nonzero" }}
                />
              </g>
            </svg>
          </Link>
          <Link href="https://youtube.com">
            <svg
              height="36"
              id="Layer_1"
              version="1.1"
              viewBox="0 0 100 100"
              width="36"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <g>
                <path
                  d="M50.872,44.545c-0.825-0.475-1.662-0.915-2.442-1.464c-0.747-0.525-1.396-1.05-2.148-1.562   C45.881,41.246,45,40.978,45,40.716c0,0.386,0,1.934,0,2.148c0,1.239-0.094,7.613-0.08,8.412c0.02,1.337-0.084,2.674-0.035,4.011   c0.046,1.275,0.054,2.493,0.01,3.825c0,0,3.185-1.547,3.61-1.814c1.634-1.029,3.235-2.146,4.909-3.102   c0.823-0.47,1.674-0.886,2.46-1.417c0.714-0.485,3.481-2.812,3.577-2.753c-1.278-0.781-2.517-1.598-3.849-2.289   C53.898,46.853,52.532,45.5,50.872,44.545z"
                  fill="#e71d27"
                />
                <path
                  d="M50,3.84C24.506,3.84,3.84,24.506,3.84,50S24.506,96.16,50,96.16S96.16,75.494,96.16,50   S75.494,3.84,50,3.84z M75.354,60.014c-0.477,2.246-1.078,4.595-2.618,6.369c-1.671,1.922-4.549,1.416-6.848,1.582   c-5.589,0.404-11.166,0.026-16.759,0.173c-2.299,0.061-4.566,0.008-6.859-0.106c-2.282-0.114-4.669,0.13-6.95-0.054   c-1.384-0.113-2.777-0.116-4.156-0.286c-1.106-0.136-2.778-0.297-3.615-1.133c-0.407-0.406-0.54-1.037-0.893-1.511l-0.509-0.888   c-2.191-4.672-2.147-9.816-2.156-14.92c-0.005-1.896,0.225-3.782,0.174-5.68c-0.033-1.225,0.523-2.385,0.599-3.618   c0.078-1.236,0.311-2.427,0.909-3.5c1.164-2.087,1.753-3.067,3.916-3.952c1.083-0.444,3.101-0.568,4.261-0.546   c1.381,0.024,2.765,0.018,4.144,0.002c2.804-0.034,5.604-0.117,8.407-0.108c2.438,0.007,4.907,0.019,7.339,0.171   c2.435,0.15,4.88-0.083,7.322-0.021c2.012,0.051,4.028,0.047,6.036,0.195c1.503,0.111,3.255,0.294,4.561,1.129   c0.784,0.501,1.656,1.17,2.009,1.992c1.026,2.389,1.88,4.808,2.024,7.422c0.148,2.678,0.182,5.36,0.255,8.04   c0.013,0.462,0.027,0.925,0.042,1.387C76.078,54.78,75.897,57.441,75.354,60.014z"
                  fill="#e71d27"
                />
              </g>
            </svg>
          </Link>
        </div>
      </Container>
      <div className="bg-[#297fca] text-white py-8">
        <Container className="items-center md:justify-items-start grid grid-cols-1 md:grid-cols-[1fr,3fr] md:gap-2 gap-12">
          {footer.map((item) => (
            <div
              className="flex flex-col md:items-start md:self-start items-center gap-3 md:pl-8"
              key={item._key}
            >
              <h2 className="uppercase md:text-2xl">{item.title}</h2>
              {item.link.map((data, i) => (
                <Link
                  key={i}
                  href={data.externalLink}
                  className="flex justify-center cursor-pointer capitalize text-sm md:text-lg"
                >
                  {data.title}
                </Link>
              ))}
            </div>
          ))}
        </Container>
      </div>
      <Container className="flex flex-col md:flex-row md:justify-between items-center gap-4 py-4">
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            width={100}
            height={20}
            priority
            className="w-auto h-auto"
          />
        </Link>
        <p className="text-center text-sm">
          © 2023 ChopsDelight. All rights reserved.
        </p>
      </Container>
    </div>
  );
}

export default Footer;
