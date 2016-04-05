/*!
{
  "name": "IndexedDB Blob",
  "property": "indexeddbblob"
}
!*/
define(["Modernizr","addTest","prefixed","test/indexeddb"],function(e,t,n){e.addAsyncTest(function(){var i,r,o,s="detect-blob-support",a=!1;try{i=n("indexedDB",window)}catch(c){}if(!e.indexeddb||!e.indexeddb.deletedatabase)return!1;try{i.deleteDatabase(s).onsuccess=function(){r=i.open(s,1),r.onupgradeneeded=function(){r.result.createObjectStore("store")},r.onsuccess=function(){o=r.result;try{o.transaction("store","readwrite").objectStore("store").put(new Blob,"key"),a=!0}catch(e){a=!1}finally{t("indexeddbblob",a),o.close(),i.deleteDatabase(s)}}}}catch(c){t("indexeddbblob",!1)}})});