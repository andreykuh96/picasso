export default function calcUserByPost(postId) {
	const postsPerPage = 10;
	const res = Math.floor((postId - 1) / postsPerPage) + 1;
	return res;
}
