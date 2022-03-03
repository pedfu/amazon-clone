import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:5001/clone-8776d/us-central1/api" // API (cloud function) URL
});

export default instance;