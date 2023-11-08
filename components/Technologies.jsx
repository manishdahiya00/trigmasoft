import React from "react";

function Technologies() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <hr className="mx-4 py-4" />

      <p className="text-6xl font-bold tracking-wider text-center leading-loose text-white mb-36 sm:text-8xl lg:text-7xl">
        Technologies We Work With
      </p>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-52">
        <dl className="grid grid-cols-4 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <img
              className="h-40 w-40"
              src="/swift-ui.webp"
              alt=""
              sizes="auto"
            />
          </div>
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <img className="h-40 w-40" src="/kotlin.webp" alt="" sizes="auto" />
          </div>
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <img
              className="h-40 w-40"
              src="/android.webp"
              alt=""
              sizes="auto"
            />
          </div>
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <img className="h-40 w-40" src="ruby.webp" alt="" sizes="auto" />
          </div>
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <img className="h-52 w-52" src="/java.webp" alt="" sizes="auto" />
          </div>
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <img className="h-52 w-52" src="/js.webp" alt="" sizes="auto" />
          </div>
        </dl>
      </div>
    </div>
  );
}

export default Technologies;
