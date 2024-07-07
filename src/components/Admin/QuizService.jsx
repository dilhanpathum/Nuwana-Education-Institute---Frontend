import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8080/api/v1"
});

export const createQuestion = async (quizQuestion, token) => {
  try {
    console.log("Token:", token);
    const response = await api.post("/create-new-question", quizQuestion, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error in createQuestion:", error);
    console.log("Token used:", token);
  }
};

export const getAllQuestions = async (token) => {
  try {
    console.log("Token:", token);
    const response = await api.get("/all-questions", {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error in getAllQuestions:", error);
    console.log("Token used:", token);
    return [];
  }
};

export const fetchQuizForUser = async (number, subject, token) => {
  try {
    console.log("Token:", token);
    const response = await api.get(`/quiz/fetch-questions-for-user?numOfQuestions=${number}&subject=${subject}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error in fetchQuizForUser:", error);
    console.log("Token used:", token);
    return [];
  }
};

export const getSubjects = async (token) => {
  try {
    console.log("Token:", token);
    const response = await api.get("/subjects", {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error in getSubjects:", error);
    console.log("Token used:", token);
  }
};

export const updateQuestion = async (id, question, token) => {
  try {
    console.log("Token:", token);
    const response = await api.put(`/question/${id}/update`, question, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error in updateQuestion:", error);
    console.log("Token used:", token);
  }
};

export const getQuestionById = async (id, token) => {
  try {
    console.log("Token:", token);
    const response = await api.get(`/question/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error in getQuestionById:", error);
    console.log("Token used:", token);
  }
};

export const deleteQuestion = async (id, token) => {
  try {
    console.log("Token:", token);
    const response = await api.delete(`/question/${id}/delete`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error in deleteQuestion:", error);
    console.log("Token used:", token);
  }
};