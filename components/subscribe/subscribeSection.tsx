import { SubscriptionInput } from "./subscribeInput";

export default function SubscribeSection() {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-8 bg-myPrimary px-10 py-20 text-white">
      <h1 className="text-4xl tracking-tight xl:text-6xl">Newsletter</h1>
      <p className="px-20 text-center text-xl font-extralight xl:text-2xl">
        Sign up to receive updates on new arrivals and special offers
      </p>
      <SubscriptionInput />
    </section>
  );
}
