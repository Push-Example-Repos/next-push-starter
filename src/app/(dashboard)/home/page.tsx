import Image from "next/image";

const HomePage = () => {
  return (
    <div className="flex flex-1 flex-grow bg-white/80 rounded-l-xl">
      <div className="flex flex-col justify-center items-center flex-grow gap-8">
        <Image
          src="/Push-Logo-Standard-Dark.png"
          alt="Hero"
          width={300}
          height={300}
          className="prevent-select"
        />

        <div className="text-center space-y-4">
          <h2 className="text-gray-700 text-2xl font-bold mx-auto">
            Welcome to the Practical guide to Push Protocol SDK.
          </h2>

          <p className="text-gray-600 text-center max-w-3xl">
            This guide will help you to understand the Push Protocol SDK and its
            features. You will learn how to integrate the Push Protocol SDK into
            a web application and how to use the SDK to send and receive
            messages.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
