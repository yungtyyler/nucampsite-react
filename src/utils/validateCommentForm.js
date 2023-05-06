export const validateCommentForm = (values) => {
    const errors = {};

    if (!values.rating) {
        errors.rating = 'Required'
        values.rating = '5';
    } else if (values.rating === 'Select...') {
        errors.rating = 'Please select a rating.';
    }

    if (!values.author){
        errors.author = 'Required';
    } else if (values.author.length < 2) {
        errors.author = 'Must be at least 2 characters.';
    }

    if (!values.commentText){
        errors.commentText = 'Please write a comment.';
    }

    return errors;
}