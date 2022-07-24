import React from 'react';
import {createStore, action, thunk} from 'easy-peasy';

const contactModel = {
  contacts: [],
  sent_requests: [],
  received_requests: [],
  sorted_contacts: [],

  updateMessagesBlock: action((state, data) => {
    state.contacts = data.contacts;
    state.sent_requests = data.sent_requests;
    state.received_requests = data.received_requests;
    state.sorted_contacts = data.sorted_contacts;
  }),
};

const activeModal = {
  active: 'Home',

  updateActive: action((state, data) => {
   
    state.active = data;
  }),
};

const navSwitch = {
  box: 'splash',

  updateNavSwitch: action((state, data) => {
    // console.warn('tttttttt', data);
    state.box = data;
  }),
};

const sendTo = {
  sendToUser: '',

  updateSendToUser: action((state, data) => {
    // console.warn('sendToUser>>>>>', data);
    state.sendToUser = data;
  }),
};

const sendTo2 = {
  sendToUser2: '',

  updateSendToUser2: action((state, data) => {
    // console.warn('sendToUser>>>>>', data);
    state.sendToUser2 = data;
  }),
};

const sendTo3 = {
  sendToUser3: '',

  updateSendToUser3: action((state, data) => {
    // console.warn('sendToUser3333>>>>>', data);
    state.sendToUser3 = data;
  }),
};

const selectedContact = {
  selectedContact: '',

  updateSelectedContact: action((state, data) => {
    console.warn('selectedContact>>>>>', data);
    state.selectedContact = data;
  }),
};

const sendToToggle = {
  sendToActive: [],
  updateSendToActive: action((state, data) => {
    // console.warn('sendToToggle>>>>>', data);
    state.sendToActive = data;
  }),
};

const transactionInfo = {
  transactions: [],
  updateTransaction: action((state, data) => {
    console.warn('sendToToggle>>>>>', data);
    state.transactions = data;
  }),
};

const requestCount = {
  count: 0,
  updateRequestCount: action((state, data) => {
    console.warn('sendToToggle>>>>>', data);
    state.count = data;
  }),
};

const virtualAccount = {
  account: [],
  updateVirtualAccount: action((state, data) => {
    console.warn('sendToToggle>>>>>', data);
    state.account = data;
  }),
};
const search = {
  searchValue: 0,
  updatesearchValue: action((state, data) => {
    console.warn('updatesearchValue>>>>>>>>>>', data);
    state.searchValue = data;
  }),
};
const AppStore = createStore({
  allContacts: contactModel,
  activePage: activeModal,

  sendToDetails: sendTo,
  sendToDetails2: sendTo2,
  sendToDetails3: sendTo3,
  sendToToggle: sendToToggle,
  selectedContact: selectedContact,
  requestCount: requestCount,
  transactionInfo: transactionInfo,
  virtualAccount: virtualAccount,
  search: search,
  navSwitch: navSwitch,
});

export default AppStore;
