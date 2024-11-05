import { Chart } from "@/components/chart";

export default function Page() {
    return (
        <>
            <div className="flex flex-1 flex-col gap-4 py-4">
                <div className="grid auto-rows-min gap-4 grid-cols-1 md:grid-cols-3">
                    <div className="aspect-video rounded-xl bg-red-500/50" />
                    <div className="aspect-video rounded-xl bg-red-500/50" />
                    <div className="aspect-video rounded-xl bg-red-500/50" />
                    <div className=" rounded-xl md:col-span-2 bg-red-500/50" >
                        <Chart />
                    </div>
                    <div className="aspect-video rounded-xl bg-red-500/50" />
                </div>
                <div className="grid auto-rows-min gap-[1rem] grid-cols-1 md:grid-cols-3">
                    <div className="w-full h-[244px] rounded-xl bg-red-500/50" />
                    <div className="w-full md:col-span-2 rounded-xl bg-red-500/50" >

                    </div>
                </div>
            </div>
        </>
    )
}