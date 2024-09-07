import React, { useState, useEffect } from "react";
import Layout from "../../../components/layout/Layout";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Crop = () => {
  const [categories, setCategories] = useState([]);

  //get categories
  const getAllCategories = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8080/api/v1/category/get-category"
      );
      if (data.success) {
        // toast.success("got all the categories");
        setCategories(data.category);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  //get products
  const [crops, setCrops] = useState([]);
  const getAllCrops = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8080/api/v1/crops/get-crop"
      );
      if (data.success) {
        // toast.success(data.message);
        setCrops(data.getCrops);
      } else {
        toast.error("something wrong");
      }
    } catch (error) {
      toast.error(error);
    }
  };

  console.log(crops);
  const rabiId = "66311ab2d1da5109bf09777d";
  const kharifId = "66311a31d1da5109bf097774";
  const zaidId = "66311ab9d1da5109bf097782";

  const rabiCrops = crops.filter((item) => item.category._id === rabiId);
  const kharifCrops = crops.filter((item) => item.category._id === kharifId);

  const zaidCrops = crops.filter((item) => item.category._id === zaidId);

  const khrif = [
    {
      name: "समय",
      description: "जून से अक्टूबर",
    },
    {
      name: "वर्षा",
      description:
        "यह मौसम दक्षिण-पश्चिम मानसून के साथ मेल खाता है, जो भारत के अधिकांश हिस्सों में प्रचुर वर्षा लाता है।",
    },
    {
      name: "रोपण",
      description: (
        <>
          ख़रीफ़ का मौसम उन फसलों के लिए आदर्श है जिनमें बहुत अधिक पानी की
          आवश्यकता होती है। <br />
          {/*  sorghum (jowar)</Link>, pearl millet (bajra), finger
        millet (ragi), cotton, soybeans, groundnuts, and pulses like pigeon peas
        (tur dal) and green gram (moong dal). */}
          {kharifCrops.map((item) => (
            <div key={item.name} className="inline-flex">
              <Link
                to={`/crop-details/${item.slug}`}
                className="py-1 mt-4 mr-2 border rounded-md hover:text-black text-white bg-emerald-500 px-4 hover:bg-white"
              >
                {item.slug}
              </Link>
            </div>
          ))}
        </>
      ),
    },
  ];
  const rabi = [
    {
      name: "समय",
      description: "नवंबर से अप्रैल",
    },
    {
      name: "वर्षा",
      description:
        "यह मौसम लौटते हुए मानसून के बाद आता है, इसलिए इसकी विशेषता शुष्क और ठंडा मौसम है।",
    },
    {
      name: "रोपण",
      description: (
        <>
          रबी मौसम उन फसलों के लिए उपयुक्त है जो कम तापमान सहन कर सकती हैं
          तापमान और कम पानी की आवश्यकता होती है। सामान्य फसलें शामिल हैं <br />
          {/* wheat, barley, oats, chickpeas (chana), lentils (masoordal), mustard, and oilseeds like sesame and sunflower */}
          {rabiCrops.map((item) => (
            <div key={item.name} className="inline-flex">
              <Link
                to={`/crop-details/${item.slug}`}
                className="py-1 mt-4 mr-2 border rounded-md hover:text-black text-white bg-emerald-500 px-4 hover:bg-white"
              >
                {item.slug}
              </Link>
            </div>
          ))}
        </>
      ),
    },
  ];
  const zaid = [
    {
      name: "समय",
      description: "मार्च से जून",
    },
    {
      name: "वर्षा",
      description:
        "यह मौसम रबी और ख़रीफ़ के बीच आता है और आमतौर पर गर्म और शुष्क मौसम की विशेषता होती है।",
    },
    {
      name: "रोपण",
      description: (
        <>
          ज़ैद का मौसम अपेक्षाकृत छोटा होता है, और यह तेजी से बढ़ने के लिए आदर्श
          है, गर्मी सहने वाली फसलें. इसमें सामान्य फसलें <br />
          {/* season include vegetables like cucumbers, watermelons,
                    muskmelons, and certain types of legumes. */}
          {zaidCrops.map((item) => (
            <div key={item.name} className="inline-flex">
              <Link
                to={`/crop-details/${item.slug}`}
                className="py-1 mt-4 mr-2 border rounded-md hover:text-black text-white bg-emerald-500 px-4 hover:bg-white"
              >
                {item.slug}
              </Link>
            </div>
          ))}
        </>
      ),
    },
  ];

  useEffect(() => {
    getAllCategories();
    getAllCrops();
  }, []);

  return (
    <Layout>
      <div className="w-[100%]">
        <div className="w-[90%] my-10 mx-auto">
          <h1 className="text-2xl w-fit text-emerald-500 font-bold mb-6 border-b-4">
            फसल उत्पादन
          </h1>

          <div className="text-[14px] md:text-[16px] leading-6">
            <p className="flex">
              भारत में तीन प्राथमिक कृषि मौसमों का अनुभव होता है विभिन्न मौसम
              स्थितियों की विशेषता और के लिए उपयुक्त विशिष्ट फसलों की खेती. ये
              ऋतुएँ हैं:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-5">
              <div className="p-5 rounded-md bg-gray-50 hover:shadow-md">
                <h1 className="text-xl font-semibold text-emerald-500 border-b pb-2">
                  खरीफ फसल
                </h1>
                <div className="mt-2  md:min-h-[260px]">
                  {khrif.map((feature) => (
                    <div
                      key={feature.name}
                      className="relative text-[14px] md:text-[16px] leading-7"
                    >
                      <dt className="inline text-emerald-500 font-medium">
                        {feature.name} :
                      </dt>{" "}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-2 mt-6">
                  <Link
                    to="https://www.commodityinsightsx.com/commodities/cereals"
                    target="_blank"
                    className="flex w-full items-center rounded-md bg-emerald-500 px-3.5 py-2.5 shadow-md text-white hover:bg-emerald-400"
                  >
                    विक्रय मूल्य देखें
                  </Link>
                  <Link
                    to="/contact"
                    className="flex w-full items-center rounded-md bg-emerald-500 px-3.5 py-2.5 shadow-md text-white hover:bg-emerald-400"
                  >
                    खरीदने या बेचने के लिए हमसे संपर्क करें
                  </Link>
                  <p className="text-[12px] justify-end -mt-2">
                    *आपको Commodity Insights पर मूल्य सूचना के लिए भेज रहा हूं
                  </p>
                </div>
              </div>
              <div className="p-5 rounded-md bg-gray-50 hover:shadow-md">
                <h1 className="text-xl font-semibold text-emerald-500 border-b pb-2">
                  रबी फसल
                </h1>
                <div className="mt-2  md:min-h-[260px]">
                  {rabi.map((feature) => (
                    <div
                      key={feature.name}
                      className="relative text-[14px] md:text-[16px] leading-7"
                    >
                      <dt className="inline text-emerald-500 font-medium">
                        {feature.name} :
                      </dt>{" "}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-2 mt-6">
                  <Link
                    to="https://www.commodityinsightsx.com/commodities/cereals"
                    target="_blank"
                    className="flex w-full items-center rounded-md bg-emerald-500 px-3.5 py-2.5 shadow-md text-white hover:bg-emerald-400"
                  >
                    विक्रय मूल्य देखें
                  </Link>
                  <Link
                    to="/contact"
                    className="flex w-full items-center rounded-md bg-emerald-500 px-3.5 py-2.5 shadow-md text-white hover:bg-emerald-400"
                  >
                    खरीदने या बेचने के लिए हमसे संपर्क करें
                  </Link>
                  <p className="text-[12px] justify-end -mt-2">
                    *आपको Commodity Insights पर मूल्य सूचना के लिए भेज रहा हूं
                  </p>
                </div>
              </div>
              <div className="p-5 rounded-md bg-gray-50 hover:shadow-md">
                <h1 className="text-xl font-semibold text-emerald-500 border-b pb-2">
                  ज़ैद फसल
                </h1>
                <div className="mt-2  md:min-h-[260px]">
                  {zaid.map((feature) => (
                    <div
                      key={feature.name}
                      className="relative text-[14px] md:text-[16px] leading-7"
                    >
                      <dt className="inline text-emerald-500 font-medium">
                        {feature.name} :
                      </dt>{" "}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-2 mt-6">
                  <Link
                    to="https://www.commodityinsightsx.com/commodities/cereals"
                    target="_blank"
                    className="flex w-full items-center rounded-md bg-emerald-500 px-3.5 py-2.5 shadow-md text-white hover:bg-emerald-400"
                  >
                    विक्रय मूल्य देखें
                  </Link>
                  <Link
                    to="/contact"
                    className="flex w-full items-center rounded-md bg-emerald-500 px-3.5 py-2.5 shadow-md text-white hover:bg-emerald-400"
                  >
                    खरीदने या बेचने के लिए हमसे संपर्क करें
                  </Link>
                  <p className="text-[12px] justify-end -mt-2">
                    *आपको Commodity Insights पर मूल्य सूचना के लिए भेज रहा हूं
                  </p>
                </div>
              </div>
            </div>
            <p className="flex mt-5 ">
              भारत में ये कृषि मौसम फसल योजना के लिए महत्वपूर्ण हैं और रोटेशन,
              क्योंकि वे देश की जलवायु परिस्थितियों के साथ संरेखित होते हैं और
              मानसून पैटर्न। किसान अधिकतम लाभ के लिए इन मौसमों पर भरोसा करते हैं
              फसल की पैदावार और आबादी के लिए खाद्य सुरक्षा सुनिश्चित करना।
            </p>
          </div>
        </div>
      </div>

      {/* {JSON.stringify(categories,null,4)} */}
      {/* {JSON.stringify(rabiC,null,4)}
     {JSON.stringify(kharifC,null,4)}
     {JSON.stringify(zaidC,null,4)} */}
      {/* {JSON.stringify(rabiId,null,4) } */}
      {/* {JSON.stringify(rabi,null,4)} */}
      {/* {JSON.stringify(rabiCrops,null,4)} */}
      {/* {JSON.stringify(c,null,4)} */}
      {/* {JSON.stringify(rabiCrops,null,4)} */}
    </Layout>
  );
};

export default Crop;
