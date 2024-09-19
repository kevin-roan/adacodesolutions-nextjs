import { title } from "@/components/primitives";
import { Input, Textarea } from "@nextui-org/input";
import ContactUs from "../contact";
import Colors from "@/contants/colors";

export default function BlogPage() {
  return (
    <div className="flex flex-col p-10">
      <h1 className={title()}>Contact Us</h1>
      <form
        action="https://formsubmit.co/adacodesolutions@gmail.com"
        method="POST"
      >
        <Input
          className="my-3"
          label="Your Name"
          placeholder="John Doe"
          type="text"
        />
        <Input
          className="my-3"
          label="Email"
          placeholder="johndoe@mail.com"
          type="email"
        />
        <Input
          className="my-3"
          label="Phone Number"
          placeholder="+91 987654321"
          type="tel"
        />
        <Textarea className="my-4" placeholder="Enter your message here" />
        <button
          className="p-3 px-4 text-white rounded-lg w-full "
          style={{ backgroundColor: Colors.primary }}
        >
          Contact Now
        </button>
      </form>
    </div>
  );
}
