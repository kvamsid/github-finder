import React from 'react'
import axios from 'axios'
const GITHUB_URL = import.meta.env.VITE_GITHUB_URL;
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

const github = axios.create({
    baseURL: GITHUB_URL,
    headers: { Authorization: `token ${GITHUB_TOKEN}`}
})

export const searchUsers = async (text) => {
    const params = new URLSearchParams({
        q: text
    })
    const response = await github.get(`/search/users?${params}`)
    return response.data.items
}

export const getUserAndRepos = async (login) =>{
    const params = new URLSearchParams({
        sort: 'created',
        per_page: 10,

    })
    const [user, repos] = await Promise.all([
        github.get(`/users/${login}`),
        github.get(`/users/${login}/repos?${params}`)
    ])
    return {user: user.data, repos: repos.data}
}