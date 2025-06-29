import { LucidePhoneCall, Mail, MapPin } from "lucide-react";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { useState } from "react";
import axios from "axios";

let API = "https://portfolio-h7np.onrender.com";

const Contact = () => {
  const [contectData, setContectData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSetData = (e) => {
    const { name, value } = e.target;
    setContectData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${API}/api/v1/sendmail`,
        { contectData },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(res.data);

      if (res.data.success) {
        setContectData({
          name: "",
          email: "",
          message: "",
        });

        alert("message send successfully");
      }
    } catch (error) {
      console.error("Error sending message:", error.message);
    }
  };

  return (
    <div id="contect" className="min-h-screen px-4 py-10 md:px-10 lg:px-20">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl">Contact</h2>
      </div>

      {/* Grid Layout */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 p-6 rounded-xl shadow-md bg-white">
        {/* Left Column – Contact Info */}
        <div className="space-y-8 text-gray-700">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl">
            Let's Talk
          </h1>
          <p className="text-sm sm:text-base leading-relaxed text-gray-700">
            Thank you for visiting my portfolio! If you have any questions,
            project ideas, or collaboration opportunities, feel free to reach
            out. I am always open to learning, connecting, and working on
            exciting projects. You can contact me via email or phone. I will do
            my best to respond quickly. Let's create something amazing together!
          </p>

          <div className="space-y-4 text-sm sm:text-base">
            <div className="flex items-center gap-3">
              <Mail className="text-orange-500" />
              <span>ashkumar828717@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <LucidePhoneCall className="text-orange-500" />
              <span>+91 8287176223</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-orange-500" />
              <span>Haryana (Delhi NCR), India</span>
            </div>
          </div>
        </div>

        {/* Right Column – Contact Form */}
        <form
          onSubmit={formSubmit}
          className="space-y-6 bg-white p-4 sm:p-6 rounded-xl"
        >
          <div>
            <Label className="text-base font-semibold">Name</Label>
            <Input
              name="name"
              value={contectData.name}
              onChange={handleSetData}
              required
              placeholder="Enter Your Name"
              className="mt-1"
            />
          </div>

          <div>
            <Label className="text-base font-semibold">Email</Label>
            <Input
              name="email"
              value={contectData.email}
              onChange={handleSetData}
              required
              placeholder="Enter Your Email"
              className="mt-1"
            />
          </div>

          <div>
            <Label className="text-base font-semibold">Message</Label>
            <Textarea
              name="message"
              value={contectData.message}
              onChange={handleSetData}
              required
              placeholder="Type Your Message Here"
              className="mt-1 text-gray-800"
            />
          </div>

          <Button
            type="submit"
            className="mt-4 w-full bg-gradient-to-r from-orange-400 to-pink-500 text-white font-bold text-lg bg-blue-400"
          >
            Submit Now
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
