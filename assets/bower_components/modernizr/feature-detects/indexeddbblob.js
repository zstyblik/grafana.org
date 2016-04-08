/*!
{
  "name": "IndexedDB Blob",
  "property": "indexeddbblob"
}
!*/
define(["Modernizr","addTest","prefixed","test/indexeddb"],function(A,e,w){A.addAsyncTest(function(){var t,n,D,i="detect-blob-support",o=!1;try{t=w("indexedDB",window)}catch(d){}if(!A.indexeddb||!A.indexeddb.deletedatabase)return!1;try{t.deleteDatabase(i).onsuccess=function(){n=t.open(i,1),n.onupgradeneeded=function(){n.result.createObjectStore("store")},n.onsuccess=function(){D=n.result;try{D.transaction("store","readwrite").objectStore("store").put(new Blob,"key"),o=!0}catch(A){o=!1}finally{e("indexeddbblob",o),D.close(),t.deleteDatabase(i)}}}}catch(d){e("indexeddbblob",!1)}})});