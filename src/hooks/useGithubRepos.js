import { useEffect, useState } from "react";
import axios from "axios";

const GITHUB_USERNAME = "ibrvhima";

export const useGithubRepos = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos`,
          {
            params: {
              sort: "updated",
              per_page: 6,
              type: "owner",
            },
          }
        );

        setRepos(response.data);
      } catch (err) {
        // ✅ Utilisation de err pour ESLint et debug
        console.error("GitHub API Error:", err);
        setError("Impossible de charger les repositories GitHub.");
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return { repos, loading, error };
};
