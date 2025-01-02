import { PinContainer } from "./card";

interface AnimatedPinDemoProps {
  path1: string;
  handler1: string;
  link1: string;

  path2: string;
  handler2: string;
  link2: string;

  path3: string;
  handler3: string;
  link3: string;
}

export function AnimatedPinDemo({ path1 ,path2, path3, handler1,handler2,handler3, link1,link2, link3 }: AnimatedPinDemoProps) {
  return (
    <div className="min-h-[30rem] w-full py-8 flex flex-col lg:flex-row items-center justify-center gap-8">
      <div className="w-full max-w-sm lg:max-w-none lg:w-auto">
        <PinContainer title={link1} href={link1}>
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-full sm:w-[20rem] h-[20rem]">
            <h2 className="max-w-md !pb-2 !m-0 font-bold text-base text-slate-100">
              {handler1}
            </h2>
            <div className="flex flex-1 w-full rounded-lg bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
              <img
                src={path1}
                alt="Frontend Preview"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </PinContainer>
      </div>
      
      <div className="w-full max-w-sm lg:max-w-none lg:w-auto">
        <PinContainer title={link2} href={link2}>
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-full sm:w-[20rem] h-[20rem]">
            <h2 className="max-w-md !pb-2 !m-0 font-bold text-base text-slate-100">
              {handler2}
            </h2>
            <div className="flex flex-1 w-full rounded-lg bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
              <img
                src={path2}
                alt="Frontend Preview"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </PinContainer>
      </div>
      <div className="w-full max-w-sm lg:max-w-none lg:w-auto">
        <PinContainer title={link3} href={link3}>
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-full sm:w-[20rem] h-[20rem]">
            <h2 className="max-w-md !pb-2 !m-0 font-bold text-base text-slate-100">
              {handler3}
            </h2>
            <div className="flex flex-1 w-full rounded-lg bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
              <img
                src={path3}
                alt="Frontend Preview"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </PinContainer>
      </div>
    </div>
  );
}