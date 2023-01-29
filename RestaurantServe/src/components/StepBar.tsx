import React, { FunctionComponent } from "react";

interface Props {
  step: number;
}
const StepBar: FunctionComponent<Props> = (props: Props) => {
  const { step } = props;

  return (
    <div className='max-w-xl mx-auto my-4 border-b-2 pb-4'>
      <div className='flex pb-3'>
        <div className='flex-1'></div>

        <div className='flex-1'>
          <div className='w-10 h-10 bg-white border-2 border-grey-light mx-auto rounded-full text-lg text-white flex items-center'>
            <span
              className={`${
                step >= 0 ? "text-green-800" : "text-grey-darker"
              } text-center w-full`}
            >
              1
            </span>
          </div>
        </div>

        <div className='w-1/6 align-center items-center align-middle content-center flex'>
          <div className='w-full bg-grey-light rounded items-center align-middle align-center flex-1'>
            <div
              className='bg-green-light text-xs leading-none py-1 text-center text-grey-darkest rounded '
              style={{ width: "100%" }}
            ></div>
          </div>
        </div>

        <div className='flex-1'>
          <div className='w-10 h-10 bg-white border-2 border-grey-light mx-auto rounded-full text-lg text-white flex items-center'>
            <span
              className={`${
                step >= 1 ? "text-green-800" : "text-grey-darker"
              } text-center w-full`}
            >
              2
            </span>
          </div>
        </div>

        <div className='w-1/6 align-center items-center align-middle content-center flex' />

        <div className='flex-1'>
          <div className='w-10 h-10 bg-white border-2 border-grey-light mx-auto rounded-full text-lg text-white flex items-center'>
            <span
              className={`${
                step >= 2 ? "text-green-800" : "text-grey-darker"
              } text-center w-full`}
            >
              3
            </span>
          </div>
        </div>

        <div className='w-1/6 align-center items-center align-middle content-center flex' />

        <div className='flex-1'>
          <div className='w-10 h-10 bg-white border-2 border-grey-light mx-auto rounded-full text-lg text-white flex items-center'>
            <span
              className={`${
                step === 3 ? "text-green-800" : "text-grey-darker"
              } text-center w-full`}
            >
              4
            </span>
          </div>
        </div>

        <div className='flex-1'></div>
      </div>

      <div className='flex text-xs content-center text-center'>
        <div className='w-1/4'>Step 1</div>

        <div className='w-1/4'>Step 2</div>

        <div className='w-1/4'>Step 3</div>

        <div className='w-1/4'>Step 4</div>
      </div>
    </div>
  );
};
export default StepBar;

