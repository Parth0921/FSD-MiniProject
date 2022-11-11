import React from "react";
import FilterCard from "./FilterCard";
import { findJobs } from "./FindJobData";

export default function FilterCardList() {

    return (

        findJobs.map((e) => {
            return (
                <FilterCard
                    id={e.id}
                    title={e.title}
                    description={e.description}
                    price={e.price}
                    bidCount={e.bidCount}
                    skills={e.skills}
                />
            )
        })
    )
}


