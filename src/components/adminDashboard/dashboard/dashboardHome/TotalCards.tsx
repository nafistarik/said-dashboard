
import order from "@/assets/icons/order.png";
import cancel from "@/assets/icons/cancel.png";
import customer from "@/assets/icons/customer.png";
import Image from "next/image";

const TotalCards = () => {
  const cards = [
    {
      title: "Total Supplier",
      value: "$2,500",
      icon: customer ,
      bgColor: "bg-[#22C55E1A]",
    },
    {
      title: "Total Buyer",
      value: "1,500",
      icon: customer,
      bgColor: "bg-[#FFC6321A]",
    },
    {
      title: "Verify Pending",
      value: "45",
      icon: cancel,
      bgColor: "bg-[#FF52001A]",
    },
    {
      title: "Total Product",
      value: "35,000",
      icon: order ,
      bgColor: "bg-[#4268FB1A]",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 flex-wrap gap-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`flex items-center justify-between px-6 py-8 rounded-lg shadow-sm ${card.bgColor} w-full`}
        >
          <div>
            <h3 className="text-sm font-normal text-whiteDarker">
              {card.title}
            </h3>
            <p className="text-2xl font-semibold text-black">{card.value}</p>
          </div>
          <Image src={card.icon} alt={card.title} width={50} height={50} />
        </div>
      ))}
    </div>
  );
};

export default TotalCards;
