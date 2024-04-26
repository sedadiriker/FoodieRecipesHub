import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

const About = () => {
  const people = [
    {
      name: "Isabella Martinez",
      role: "Executive Chef",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Alexander Schmidt",
      role: "Culinary Director",
      imageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Sophia Leblanc",
      role: "Head Pastry Chef",
      imageUrl:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Olivia Andersson",
      role: "Sous Chef",
      imageUrl:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Leonardo Costa",
      role: "Food Stylist",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Lucas Dubois",
      role: "Nutrition Consultant",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ];

  return (
    <div className="bg-white dark:bg-slate-800">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight  text-gray-600 uppercase  my-5 dark:text-white">
          About Us
        </h2>
        <div className="flex flex-col sm:flex-row gap-5">
          <p className=" text-justify sm:w-[50%] font-lato leading-7 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ex
            debitis cupiditate voluptate asperiores quod corrupti reprehenderit
            a? Saepe veniam fugiat optio eaque perferendis id repellat. Aut,
            sint modi deleniti temporibus saepe, rem, doloremque nihil est quo
            culpa ipsam quod molestias nemo nobis labore officia explicabo illum
            at quaerat enim aliquam ducimus hic! Harum, suscipit ipsa aperiam
            est eius officiis minima dolor aliquid tempore veniam porro quidem!
            Corrupti odit porro eius quasi, asperiores ullam perferendis nisi
            molestiae architecto amet, suscipit eos tenetur laborum voluptates
            qui perspiciatis nihil iste deserunt, exercitationem quo! Non dicta
            doloremque voluptatem, facilis beatae fugit ea itaque?
          </p>
          <div className="flex flex-col gap-5 text-[2rem] justify-center items-center sm:w-[50%]">
            <>
              <div className="flex -space-x-2 overflow-hidden">
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                  alt=""
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
            </>
            <h4 className=" font-montserrat dark:text-white">Contact Us</h4>
            <div className="flex justify-evenly w-full">
              <button className=" text-main hover:scale-110">
                <FaInstagram />
              </button>
              <button className=" text-main hover:scale-110">
                {" "}
                <FaFacebook />
              </button>
              <button className=" text-main hover:scale-110">
                <FaYoutube />
              </button>
              <button className=" text-main hover:scale-110">
                <FaTwitter />
              </button>
              <button className=" text-main hover:scale-110">
                <FaPinterest />
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white py-24 sm:py-32 dark:bg-slate-800">
          <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Meet our team
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Libero fames augue nisl porttitor nisi, quis. Id ac elit odio
                vitae elementum enim vitae ullamcorper suspendisse.
              </p>
            </div>
            <ul
              role="list"
              className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
            >
              {people.map((person) => (
                <li key={person.name}>
                  <div className="flex items-center gap-x-6">
                    <img
                      className="h-16 w-16 rounded-full"
                      src={person.imageUrl}
                      alt=""
                    />
                    <div>
                      <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900 dark:text-gray-300">
                        {person.name}
                      </h3>
                      <p className="text-sm font-semibold leading-6 text-main">
                        {person.role}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
