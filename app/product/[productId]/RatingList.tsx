"use-client";

import Avatar from "@/app/components/Avatar";
import Headline from "@/app/components/Headline";
import { Rating } from "@mui/material";
import moment from "moment";

interface ListRating {
  product: any;
}

const RatingList: React.FC<ListRating> = ({ product }) => {
  return (
    <div>
      <Headline title="Ürün Değerlendirme" />
      <div className="text-sm mt-2">
        {product.reviews &&
          product.reviews.map((review: any) => {
            return (
              <div key={review.id} className="max-w-[300px]">
                <div className="flex gap-2 items-center">
                  <Avatar src={review?.user.image} />
                  <div className="font-semibold">{review?.user.name}</div>
                  <div className="font-light">
                    {moment(review.createdDate).fromNow()}
                  </div>
                </div>
                <div className="mt-2">
                  <Rating value={review.rating} readOnly />
                </div>
                <div className="ml-2">{review.comment}</div>
                <hr className="mt-4 mb-4" />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default RatingList;
