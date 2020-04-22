//api_users (user controller) signup
export const postUser = user => {

  return $.ajax({
    url: '/api/users',
    method: 'POST',
    data: { user },
  })
  
};

//login
export const postSession = user => (
  $.ajax({
    url: '/api/session',
    method: 'POST',
    data: { user },
  })
);

//logout
export const deleteSession = () => (
  $.ajax({
    url: '/api/session',
    method: 'DELETE',
  })
);

