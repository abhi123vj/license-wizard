import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="w-full  h-[calc(100vh-4rem)] flex flex-row">
        <ScrollArea className=" w-[19rem] pb-10 pl-8 pr-6 ">
          <ul>
            <li className="mt-12 lg:mt-8">
              <h5 className="mb-8 lg:mb-3 font-semibold text-slate-200">
                IQRA Arabic Reader
              </h5>
              <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 ">
                <li>
                  <Link
                    className="block border-l pl-4 -ml-px border-transparent hover:border-yellow-200 text-slate-400 hover:text-yellow-200 "
                    href="iqra"
                  >
                    Json and Images
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </ScrollArea>
        {children}
      </div>
    </div>
  );
}
