import { Header } from "./components/Header";
import { TeamSection } from "./components/TeamSection";
import axios from "axios";

export default function App() {
  const testApi = async () => {
    try {
      const res = await axios.get("http://localhost:8080/health");
      console.log(res.data);
      alert(JSON.stringify(res.data));
    } catch (error) {
      console.error(error);
      alert("API 호출 실패");
    }
  };

  return (
    <div className="min-h-screen bg-white py-12 px-8">
      <div className="max-w-5xl mx-auto">
        <Header />

        <button
          onClick={testApi}
          className="mb-6 px-4 py-2 bg-blue-500 text-white rounded"
        >
          API 테스트
        </button>

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