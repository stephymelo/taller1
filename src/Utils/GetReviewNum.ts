import React from 'react';
import { ShortElemObj } from '../Types/ShortElemObj';


export function GetReviewNum (review:ShortElemObj["review"]):number{

    const sumReview = review.reduce((prev,curr)=>{return(prev+curr)},0);

    console.log({review : sumReview/review.length})
    console.log({reviewType : typeof (sumReview/review.length)})
    return Math.round((sumReview/review.length) * 100) / 100;

}
   
