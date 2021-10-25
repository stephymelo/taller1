import React from 'react';
import { ShortElemObj } from '../Types/ShortElemObj';


export function GetReviewNum (review:ShortElemObj["review"]):number{

    const sumReview = review.reduce((prev,curr)=>{return(prev+curr)},0);

    return sumReview/review.length;
   
}