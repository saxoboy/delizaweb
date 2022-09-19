import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Container from "./Container";

const FullScreenLoading = () => {
  return (
    <Container>
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col items-center justify-center space-y-4">
          <AiOutlineLoading3Quarters className="w-12 h-12 animate-spin" />
          <h1 className="text-2xl font-bold text-gray-900">Loading...</h1>
        </div>
      </div>
    </Container>
  );
};

export default FullScreenLoading;
