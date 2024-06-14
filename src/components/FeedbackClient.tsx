import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function FeedbackSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const agencyName = "S+ Production";
  return (
    <Slider {...settings}>
      <div>
        <h4 className="font-bold">Nguyen Son Tung</h4>
        <p className="w-[300px] mt-3">
          Perfect, very good job! Thank you for your amazing product. It has
          been a highlight for us over the past 3 years and has helped our
          company grow tremendously.
        </p>
      </div>
      <div>
        <h4 className="font-bold">Pham Van Vinh</h4>
        <p className="w-[300px] mt-3">
          The graphic design is very beautiful, thank you!
        </p>
      </div>
      <div>
        <h4 className="font-bold">Le Truong Giang</h4>
        <p className="w-[300px] mt-3">
          Media products are always crucial for any business. Choosing a company
          to handle communications also plays a major role in bringing the
          business closer to customers. {agencyName} has done just that. Thank
          you so much!
        </p>
      </div>
      <div>
        <h4 className="font-bold">Nguyen Thanh Ha</h4>
        <p className="w-[300px] mt-3">
          From our first collaboration, we were impressed by your
          professionalism and meticulousness throughout the process. We are
          certain there will be many more opportunities to collaborate in the
          future!
        </p>
      </div>
    </Slider>
  );
}
