/*!
{
  "name": "IndexedDB Blob",
  "property": "indexeddbblob"
}
!*/
define(["Modernizr","addTest","prefixed","test/indexeddb"],function(A,e,t){A.addAsyncTest(function(){var n,w,i,o="detect-blob-support",r=!1;try{n=t("indexedDB",window)}catch(d){}if(!A.indexeddb||!A.indexeddb.deletedatabase)return!1;try{n.deleteDatabase(o).onsuccess=function(){w=n.open(o,1),w.onupgradeneeded=function(){w.result.createObjectStore("store")},w.onsuccess=function(){i=w.result;try{i.transaction("store","readwrite").objectStore("store").put(new Blob,"key"),r=!0}catch(A){r=!1}finally{e("indexeddbblob",r),i.close(),n.deleteDatabase(o)}}}}catch(d){e("indexeddbblob",!1)}})});