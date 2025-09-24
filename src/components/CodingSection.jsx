import { useState } from "react";
import { Github } from "lucide-react";
import { Button } from "./ui/button";

// Data
const codingTopics = [
  {
    id: 1,
    title: "Arrays",
    repoLink: "https://github.com/imvikas31/arrays-solutions",
    problems: [
      { id: 1, name: "Two Sum", difficulty: "Easy", status: "Solved", platform: "LeetCode", link: "https://leetcode.com/problems/two-sum/" },
      { id: 2, name: "Maximum Subarray", difficulty: "Medium", status: "Solved", platform: "LeetCode", link: "https://leetcode.com/problems/maximum-subarray/" }
    ]
  },
  {
    id: 2,
    title: "Dynamic Programming",
    repoLink: "https://github.com/imvikas31/dp-solutions",
    problems: [
      { id: 3, name: "Longest Increasing Subsequence", difficulty: "Medium", status: "Solved", platform: "LeetCode", link: "https://leetcode.com/problems/longest-increasing-subsequence/" },
      { id: 4, name: "0/1 Knapsack", difficulty: "Hard", status: "Solved", platform: "GeeksForGeeks", link: "https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/" }
    ]
  }
];

// Platform icons
const PlatformIcon = ({ platform }) => {
  if (platform === "LeetCode") return <span className="font-bold text-orange-500">🟧</span>;
  if (platform === "GeeksForGeeks") return <span className="font-bold text-green-600">🟩</span>;
  return <span>❓</span>;
};

const CodingSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDifficulty, setFilterDifficulty] = useState("all");

  const allProblems = codingTopics.flatMap(topic => 
    topic.problems.map(p => ({ ...p, topic: topic.title }))
  );

  const filteredProblems = allProblems.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filterDifficulty === "all" || p.difficulty === filterDifficulty)
  );

  return (
    <section className="w-full py-20 px-4 md:px-8 bg-gray-900 text-white min-h-screen font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-2">Coding Problems</h2>
          <p className="text-gray-400">Topic-wise coding problems solved across platforms.</p>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
          <input
            type="text"
            placeholder="Search problems..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 rounded-lg bg-gray-800 text-white border border-purple-600 flex-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <select
            value={filterDifficulty}
            onChange={(e) => setFilterDifficulty(e.target.value)}
            className="px-4 py-2 rounded-lg bg-gray-800 text-white border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="all">All Difficulties</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        {/* Problems Table */}
        <div className="overflow-x-auto rounded-lg border border-purple-600 shadow-lg">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-800 sticky top-0 z-10 shadow-md">
              <tr className="text-purple-300 border-b border-purple-600">
                <th className="p-3 text-sm">#</th>
                <th className="p-3 text-sm">Problem</th>
                <th className="p-3 text-sm">Topic</th>
                <th className="p-3 text-sm">Difficulty</th>
                <th className="p-3 text-sm">Status</th>
                <th className="p-3 text-sm">Platform</th>
                <th className="p-3 text-sm">Link</th>
              </tr>
            </thead>
            <tbody>
              {filteredProblems.map((p, i) => (
                <tr key={p.id} className="border-b border-gray-700 hover:bg-gray-800/70 transition-colors duration-300">
                  <td className="p-3 text-sm">{i+1}</td>
                  <td className="p-3 text-sm font-medium">{p.name}</td>
                  <td className="p-3 text-sm">{p.topic}</td>
                  <td className="p-3 text-sm">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold shadow ${
                      p.difficulty === "Easy" ? "bg-green-100 text-green-800" :
                      p.difficulty === "Medium" ? "bg-orange-100 text-orange-800" :
                      "bg-red-100 text-red-800"
                    }`}>
                      {p.difficulty}
                    </span>
                  </td>
                  <td className="p-3 text-sm">{p.status}</td>
                  <td className="p-3 text-sm flex items-center gap-1"><PlatformIcon platform={p.platform}/> {p.platform}</td>
                  <td className="p-3 text-sm">
                    <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-purple-400 underline hover:text-purple-200 transition-colors">View</a>
                  </td>
                </tr>
              ))}
              {filteredProblems.length === 0 && (
                <tr>
                  <td colSpan={7} className="p-6 text-center text-gray-500 text-sm">
                    No problems found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default CodingSection;
