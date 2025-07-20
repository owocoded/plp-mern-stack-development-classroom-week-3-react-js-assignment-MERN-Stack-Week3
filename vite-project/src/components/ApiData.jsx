import React, { useState, useEffect } from 'react';
import Card from './Card';
import Button from './Button';

const PAGE_SIZE = 10;

function ApiData() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('');

    useEffect(() => {
        setLoading(true);
        setError(null);
        fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${PAGE_SIZE}&_page=${page}`)
            .then(res => res.json())
            .then(data => {
                setPosts(data);
                setLoading(false);
            })
            .catch(err => {
                setError('Failed to fetch data');
                setLoading(false);
            });
    }, [page]);

    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <div className="flex gap-2 mb-4">
                <input
                    type="text"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    className="flex-1 px-3 py-2 rounded border dark:bg-gray-900 dark:text-gray-100"
                    placeholder="Search posts by title"
                />
            </div>
            {loading && <p className="text-blue-500">Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredPosts.map(post => (
                    <Card key={post.id}>
                        <h3 className="font-bold mb-2">{post.title}</h3>
                        <p>{post.body}</p>
                    </Card>
                ))}
            </div>
            <div className="flex gap-2 mt-4">
                <Button onClick={() => setPage(page - 1)} variant="secondary" disabled={page === 1}>Previous</Button>
                <span className="px-4 py-2">Page {page}</span>
                <Button onClick={() => setPage(page + 1)} variant="secondary">Next</Button>
            </div>
        </div>
    );
}

export default ApiData;
