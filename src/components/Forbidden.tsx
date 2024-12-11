const Forbidden = () => {
  return (
    <div
      className="flex justify-center w-screen h-screen "
      style={{
        backgroundSize: "cover",
        backgroundImage:
          "url('https://freefrontend.com/assets/img/403-forbidden-html-templates/Error-403.png')",
      }}
    >
      <a href="./">
        <button className="text-xl font-semibold btn btn-error mt-52 hover:skew-y-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span className="-mt-1 italic underline">Balek yok mas...</span>
        </button>
      </a>
    </div>
  );
};

export default Forbidden;