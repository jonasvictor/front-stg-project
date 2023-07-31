import Swal from "sweetalert2";

const Alert = {
  showToast(type, title, message) {
    return Swal.fire({
      icon: type,
      title: title,
      text: message,
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3500,
      timerProgressBar: true,
      //   didOpen: (toast) => {
      //     toast.addEventListener("mouseenter", Swal.stopTimer);
      //     toast.addEventListener("mouseleave", Swal.resumeTimer);
      //   },
    });
  },
};

export default Alert;
