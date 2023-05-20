import useData from "./useData";

export interface Brand {
  id: number;
  name: string;
  logo: string;
}

const useBrand = () => useData<Brand>("/api//product/brand");

export default useBrand;
