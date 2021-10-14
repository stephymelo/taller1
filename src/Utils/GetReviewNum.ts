import React from 'react';
import { ShortElemObj } from '../Components/App/App';


export function GetReviewNum (review:ShortElemObj["review"]):number{

    const sumReview = review.reduce((prev,curr)=>{return(prev+curr)},0);

    return sumReview/review.length;
   
}