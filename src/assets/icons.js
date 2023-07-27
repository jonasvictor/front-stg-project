// assets/icons.js
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faUserEdit,
  faTrash,
  faUserPlus,
  faMoneyBill,
  faMoneyBillWave,
  faReceipt,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faUserPlus,
  faUserEdit,
  faTrash,
  faMoneyBill,
  faMoneyBillWave,
  faReceipt
);

export default FontAwesomeIcon;
