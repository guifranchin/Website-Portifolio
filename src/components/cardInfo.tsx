interface Props {
  img: string;
  title: string;
  text?: string;
  subTitle?: string;
  subText?: string;
  tirthTittle?: string;
  tirthElements?: string[];
}

export const CardInfo = ({
  img,
  title,
  text,
  subTitle,
  subText,
  tirthTittle,
  tirthElements,
}: Props) => {
  return (
    <>
      <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg">
        <div className="flex flex-col justify-center align-middle items-center pt-8">
          <div className="bg-blue-200 rounded-full p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
              />
            </svg>
          </div>
          <h5 className=" mt-4 mb-4 text-xl font-bold text-black">{title}</h5>
        </div>
        <div className="flex items-center justify-center text-gray-900 ml-2 mr-2">
          <span className="ml-1 text-xl text-center font-normal text-black ">
            {text}
          </span>
        </div>
        <div className="flex items-center flex-col justify-center pt-6">
          <h5 className="mt-4 mb-4 text-base font-bold text-blue-600">
            {subTitle}
          </h5>
          <span className="ml-1 text-xl text-center font-normal text-black ">
            {subText}
          </span>
        </div>
        <div className="flex items-center flex-col justify-center pt-6">
          <h5 className="mt-4 mb-4 text-base font-bold text-blue-600">
            {tirthTittle}
          </h5>
          {tirthElements && (
            <div className="flex flex-col pb-5">
              {tirthElements.map((element) => (
                <span className="ml-1 text-xl text-center font-normal text-black">
                  {element}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
