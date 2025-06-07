// Callback version
function getUserCallback(id, callback) {
  setTimeout(() => {
    if (id <= 0) {
      callback("Invalid user ID", null);
    } else {
      callback(null, { id: id, name: "User" + id });
    }
  }, 1000);
}

getUserCallback(1, (err, user) => {
  if (err) {
    console.log("[Callback] Error:", err);
  } else {
    console.log("[Callback] User:", user);
  }
});


// Promise version
function getUserPromise(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id <= 0) {
        reject("Invalid user ID");
      } else {
        resolve({ id: id, name: "User" + id });
      }
    }, 1000);
  });
}

getUserPromise(2)
  .then(user => console.log("[Promise] User:", user))
  .catch(err => console.log("[Promise] Error:", err));


// Async/Await 
async function getUserAsync(id) {
  try {
    const user = await getUserPromise(id);
    console.log("[Async/Await] User:", user);
  } catch (err) {
    console.log("[Async/Await] Error:", err);
  }
}

getUserAsync(3);
