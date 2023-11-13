import BuyResidentialsPage from "@/public/components/template/BuyResidentialsPage"
import Profile from "@/public/models/Profile";
import connectDB from "@/public/utils/connectDB";

async function BuyResidential({searchParams}) {
  await connectDB();
  const profile = await Profile.find();


  if (profile.error) {
    return <h3>There is a problem!!</h3>;
  }

  let finalData = profile;
  if(searchParams.category) {
    finalData = finalData.filter(i => i.category === searchParams.category)
  }
  return <BuyResidentialsPage data={finalData} />;
}

export default BuyResidential