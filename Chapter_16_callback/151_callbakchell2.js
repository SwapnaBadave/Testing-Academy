/**
 * CALLBACK HELL (Pyramid of Doom)
 * 
 * Callback Hell occurs when multiple asynchronous operations need to be 
 * performed in sequence, and each operation depends on the result of the 
 * previous one. This leads to deeply nested callbacks, making code:
 * - Hard to read
 * - Difficult to maintain
 * - Error prone
 * 
 * This is why Promises and async/await were introduced!
 */

// ====================================================================
// EXAMPLE 1: CLASSIC CALLBACK HELL - USER DATA PROCESSING
// ====================================================================

// Simulated async functions with callbacks
function fetchUserData(userId, callback) {
    console.log(`Fetching user data for user: ${userId}`);
    setTimeout(() => {
        const user = { id: userId, name: "John Doe", email: "john@example.com" };
        callback(null, user); // (error, result) pattern
    }, 1000);
}

function fetchUserPosts(userId, callback) {
    console.log(`Fetching posts for user: ${userId}`);
    setTimeout(() => {
        const posts = [
            { id: 1, title: "Post 1", content: "Hello World" },
            { id: 2, title: "Post 2", content: "JavaScript Tips" }
        ];
        callback(null, posts);
    }, 1000);
}

function fetchPostComments(postId, callback) {
    console.log(`Fetching comments for post: ${postId}`);
    setTimeout(() => {
        const comments = [
            { id: 1, text: "Great post!" },
            { id: 2, text: "Thanks for sharing" }
        ];
        callback(null, comments);
    }, 1000);
}

function fetchCommentAuthor(commentId, callback) {
    console.log(`Fetching author for comment: ${commentId}`);
    setTimeout(() => {
        const author = { id: 1, name: "Alice" };
        callback(null, author);
    }, 1000);
}

// ====================================================================
// THE CALLBACK HELL - NESTED CALLBACKS (PYRAMID OF DOOM)
// ====================================================================

console.log("=== CALLBACK HELL EXAMPLE ===\n");

fetchUserData(1, (error, user) => {
    if (error) {
        console.log("Error fetching user:", error);
    } else {
        console.log("User received:", user.name);

        fetchUserPosts(user.id, (error, posts) => {
            if (error) {
                console.log("Error fetching posts:", error);
            } else {
                console.log(`Received ${posts.length} posts`);

                fetchPostComments(posts[0].id, (error, comments) => {
                    if (error) {
                        console.log("Error fetching comments:", error);
                    } else {
                        console.log(`Received ${comments.length} comments`);

                        fetchCommentAuthor(comments[0].id, (error, author) => {
                            if (error) {
                                console.log("Error fetching author:", error);
                            } else {
                                console.log("Comment author:", author.name);
                                console.log("\n✓ Data pipeline complete!");
                            }
                        });
                    }
                });
            }
        });
    }
});

// ====================================================================
// PROBLEMS WITH CALLBACK HELL:
// ====================================================================

/**
 * 1. READABILITY: Hard to follow the code flow due to deep nesting
 * 2. ERROR HANDLING: Need to handle errors at each level
 * 3. DEBUGGING: Stack traces become confusing
 * 4. CODE REUSE: Difficult to reuse individual callbacks
 * 5. VARIABLE SCOPE: Variables from outer callbacks can become confusing
 * 6. MAINTAINABILITY: Adding/removing steps is error-prone
 * 7. TESTING: Hard to test individual pieces
 * 
 * The code above creates a "Pyramid of Doom" structure that goes:
 *     Right → Right → Right → Right
 * 
 * Each level of nesting adds visual and mental complexity.
 */

// ====================================================================
// SOLUTION 1: USING PROMISES (Better but still complex)
// ====================================================================

console.log("\n=== PROMISES SOLUTION (Flattened) ===\n");

// Convert callbacks to promises
function fetchUserDataPromise(userId) {
    return new Promise((resolve, reject) => {
        fetchUserData(userId, (error, data) => {
            error ? reject(error) : resolve(data);
        });
    });
}

function fetchUserPostsPromise(userId) {
    return new Promise((resolve, reject) => {
        fetchUserPosts(userId, (error, data) => {
            error ? reject(error) : resolve(data);
        });
    });
}

function fetchPostCommentsPromise(postId) {
    return new Promise((resolve, reject) => {
        fetchPostComments(postId, (error, data) => {
            error ? reject(error) : resolve(data);
        });
    });
}

function fetchCommentAuthorPromise(commentId) {
    return new Promise((resolve, reject) => {
        fetchCommentAuthor(commentId, (error, data) => {
            error ? reject(error) : resolve(data);
        });
    });
}

// Much cleaner promise chain
fetchUserDataPromise(1)
    .then(user => {
        console.log("User received:", user.name);
        return fetchUserPostsPromise(user.id);
    })
    .then(posts => {
        console.log(`Received ${posts.length} posts`);
        return fetchPostCommentsPromise(posts[0].id);
    })
    .then(comments => {
        console.log(`Received ${comments.length} comments`);
        return fetchCommentAuthorPromise(comments[0].id);
    })
    .then(author => {
        console.log("Comment author:", author.name);
        console.log("✓ Promise chain complete!");
    })
    .catch(error => {
        console.log("Error in promise chain:", error);
    });

// ====================================================================
// SOLUTION 2: USING ASYNC/AWAIT (Best solution - looks synchronous)
// ====================================================================

console.log("\n=== ASYNC/AWAIT SOLUTION (Cleanest) ===\n");

async function getCompleteUserData(userId) {
    try {
        // Looks like synchronous code but runs asynchronously
        const user = await fetchUserDataPromise(userId);
        console.log("User received:", user.name);

        const posts = await fetchUserPostsPromise(user.id);
        console.log(`Received ${posts.length} posts`);

        const comments = await fetchPostCommentsPromise(posts[0].id);
        console.log(`Received ${comments.length} comments`);

        const author = await fetchCommentAuthorPromise(comments[0].id);
        console.log("Comment author:", author.name);

        return { user, posts, comments, author };
    } catch (error) {
        console.log("Error in async function:", error);
    }
}

getCompleteUserData(1).then(() => {
    console.log("✓ Async/await complete!");
});

// ====================================================================
// KEY TAKEAWAYS
// ====================================================================

/**
 * CALLBACK HELL occurs when:
 * ✗ Multiple async operations depend on each other
 * ✗ Callbacks are nested multiple levels deep
 * ✗ Error handling becomes repetitive
 * ✗ Code flows from left-to-right, then indents deeply downward
 * 
 * SOLUTIONS:
 * ✓ Use Promises (.then() chains) - flattens the pyramid
 * ✓ Use async/await - looks like synchronous code
 * ✓ Use error handling with .catch() or try/catch
 * ✓ Break long chains into separate functions
 * ✓ Use Promise.all() for parallel operations
 * 
 * MODERN BEST PRACTICE: Use async/await!
 * It's cleaner, easier to debug, and more maintainable.
 */
