import { useState } from "react";
import { Plus } from "lucide-react";
import { UserItem } from "./UserItem";

interface User {
  id: number;
  nickname: string;
  score: number;
}

interface TeamSectionProps {
  teamNumber: number;
}

export const TeamSection = ({ teamNumber }: TeamSectionProps) => {
  const [users, setUsers] = useState<User[]>([
    { id: 1, nickname: "닉네임", score: teamNumber === 1 ? 10 : 15 },
  ]);

  const addUser = () => {
    const newId = users.length > 0 ? Math.max(...users.map((u) => u.id)) + 1 : 1;
    setUsers([...users, { id: newId, nickname: "닉네임", score: 0 }]);
  };

  const updateUser = (id: number, field: "nickname" | "score", value: string | number) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, [field]: value } : user
      )
    );
  };

  return (
    <div className="flex-1 flex flex-col">
      <h2 className="text-xl font-bold text-gray-800 text-center mb-6">
        팀{teamNumber}
        <span className="font-normal text-gray-600">(텍스트 수정 가능)</span>
      </h2>

      <div className="border-t border-gray-300 mb-6"></div>

      <div className="flex flex-col gap-4 flex-1">
        {users.map((user) => (
          <UserItem
            key={user.id}
            nickname={user.nickname}
            score={user.score}
            onNicknameChange={(value) => updateUser(user.id, "nickname", value)}
            onScoreChange={(value) => updateUser(user.id, "score", value)}
          />
        ))}
      </div>

      <div className="mt-8">
        <div className="flex items-center gap-4">
          <div className="flex-1 border-t border-gray-300"></div>
          <button
            onClick={addUser}
            className="flex items-center justify-center w-12 h-10 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200 transition-colors"
          >
            <Plus className="w-6 h-6 text-gray-600" />
          </button>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>
        <p className="text-center text-gray-500 mt-4 text-sm">
          (누륩 유저항목 하나 추가생성되도록)
        </p>
      </div>
    </div>
  );
};
