"use client";

import GetAllRegionsApi from "@/app/api/regions/GetAllRegionsApi";
import { useQuery } from "@tanstack/react-query";

const useGetAllRegions = () => {
  return useQuery({
    queryKey: ["all-regions"],
    queryFn: () => GetAllRegionsApi(),
  });
};

export default useGetAllRegions;
