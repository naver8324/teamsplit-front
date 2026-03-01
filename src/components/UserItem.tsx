interface UserItemProps {
  nickname: string;
  score: number;
  onNicknameChange?: (value: string) => void;
  onScoreChange?: (value: number) => void;
}

export const UserItem = ({
  nickname,
  score,
  onNicknameChange,
  onScoreChange,
}: UserItemProps) => {
  return (
    <div className="flex gap-3">
      <input
        type="text"
        value={nickname}
        onChange={(e) => onNicknameChange?.(e.target.value)}
        className="flex-1 bg-gray-100 border border-gray-300 rounded px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
      />
      <input
        type="number"
        value={score}
        onChange={(e) => onScoreChange?.(Number(e.target.value))}
        className="w-20 bg-gray-100 border border-gray-300 rounded px-4 py-2 text-gray-700 text-center focus:outline-none focus:ring-2 focus:ring-gray-400"
      />
    </div>
  );
};
