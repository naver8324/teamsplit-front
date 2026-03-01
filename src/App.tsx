import { Header } from "./components/Header";
import { TeamSection } from "./components/TeamSection";
import axios from "axios";

const testApi = async () => {
  const res = await axios.get("http://localhost:8080/api/health");
  console.log(res.data);
};

export default function App() {
  return (
    <div className="min-h-screen bg-white py-12 px-8">
      <div className="max-w-5xl mx-auto">
        <Header />

        <div className="mt-8 flex gap-8">
          <div className="flex-1">
            <TeamSection teamNumber={1} />
          </div>
          <div className="w-px bg-gray-300"></div>
          <div className="flex-1">
            <TeamSection teamNumber={2} />
          </div>
        </div>
      </div>
    </div>
  );
}
