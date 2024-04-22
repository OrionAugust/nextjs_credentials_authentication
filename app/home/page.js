import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header></Header>
      <main className=" grid place-items-center border-3">
        <div className="pt-20 text-3xl text">
          <span className="text-green-500">Welcome</span> {"John Wick"}
        </div>
      </main>
    </>
  );
}
