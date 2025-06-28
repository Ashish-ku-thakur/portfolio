import { LucidePhoneCall, Mail, MapPin } from "lucide-react"; // NOTE: MapPinHouse → use MapPin instead
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [contectData, setContectData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSetData = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    console.log(name, value);

    setContectData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    console.log(contectData);

    const res = await axios.post(
      "https://portfolio-o2bu.vercel.app/api/v1/sendmail",
      {
        contectData,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    console.log("res->", res);
  };

  return (
    <div id="contect" className="min-h-screen mt-10 px-4 md:px-10">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="font-bold text-5xl">Contact</h2>
      </div>

      {/* Grid Layout */}
      <div className="w-full md:w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 p-6 rounded-xl shadow-md">
        {/* Left Column – Contact Info */}
        <div className="space-y-8">
          <h1 className="font-bold text-4xl ">Let's Talk</h1>
          <p className=" leading-relaxed">
            Thank you for visiting my portfolio! If you have any questions,
            project ideas, or collaboration opportunities, feel free to reach
            out. I am always open to learning, connecting, and working on
            exciting projects. You can contact me via email or phone. I will do
            my best to respond quickly. Let is create something amazing
            together!
          </p>

          <div className="space-y-5 ">
            <div className="flex items-center gap-4">
              <Mail className="text-orange-500" />
              <span>ashkumar828717@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <LucidePhoneCall className="text-orange-500" />
              <span>+91 8287176223</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-orange-500" />
              <span>Haryana (Delhi NCR), India</span>
            </div>
          </div>
        </div>

        {/* Right Column – Contact Form */}
        <form onSubmit={formSubmit} className="space-y-6 p-6 rounded-xl">
          <div>
            <Label className="">Name</Label>
            <Input
              name="name"
              value={contectData.name}
              onChange={handleSetData}
              required
              placeholder="Enter Your Name"
            />
          </div>

          <div>
            <Label className="">Email</Label>
            <Input
              name="email"
              value={contectData.email}
              onChange={handleSetData}
              required
              placeholder="Enter Your Email"
            />
          </div>

          <div className="">
            <Label className="mb-2">Message</Label>
            <Textarea
              name="message"
              value={contectData.message}
              onChange={handleSetData}
              required
              placeholder="Type Your Message Here"
            />
          </div>

          <Button type="submit" className="mt-4 w-full">
            Submit Now
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
