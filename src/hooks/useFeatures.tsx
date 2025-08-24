import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';


const useFeatures = () => {
  const axiosPublic = useAxiosPublic();
  const { data:features, isPending: isLoading } = useQuery({
    queryKey: ['features'],
    queryFn: async () => {
        const res = await axiosPublic.get("/features");
        return res.data.data;
    }
})


  return {
   ...features,
    isLoading
  }
};

export default useFeatures;


