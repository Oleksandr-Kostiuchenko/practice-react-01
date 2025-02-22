import { formatDistanceToNow } from 'date-fns';

const FormatDateToNow = postedAt => {
  return formatDistanceToNow(new Date(postedAt), { addSuffix: true });
};

export default FormatDateToNow;
